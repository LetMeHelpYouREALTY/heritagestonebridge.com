import Cerebras from '@cerebras/cerebras_cloud_sdk';

const cerebras = new Cerebras({
  apiKey: process.env['CEREBRAS_API_KEY']
});

export interface AIContentRequest {
  topic: string;
  location: string;
  propertyType?: string;
  priceRange?: string;
  audience?: string;
  contentType: 'blog-post' | 'property-description' | 'market-analysis' | 'community-guide' | 'faq';
}

export interface AIContentResponse {
  title: string;
  content: string;
  metaDescription: string;
  keywords: string[];
  structuredData: any;
  callToAction: string;
  relatedTopics: string[];
}

export async function generateAIContent(systemPrompt: string, userMessage: string): Promise<string | null> {
  try {
    const completion = await cerebras.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userMessage
        }
      ],
      model: 'qwen-3-coder-480b',
      stream: false,
      max_completion_tokens: 40000,
      temperature: 0.7,
      top_p: 0.8,
      response_format: { type: "json_object" }
    });

    return (completion as any).choices[0].message.content || null;
  } catch (error) {
    console.error("Error generating AI content:", error);
    return null;
  }
}

export async function generateStructuredAIContent(request: AIContentRequest): Promise<AIContentResponse> {
  try {
    const systemPrompt = `You are an expert Las Vegas real estate content writer specializing in 55+ communities, luxury homes, and active adult living. Create SEO-optimized, AI-search-engine-friendly content that engages users and drives conversions.

Key requirements:
- Write for Dr. Jan Duffy, Nevada Real Estate License #S.0197614
- Focus on Las Vegas, Summerlin, Henderson, Red Rock Canyon, Northwest Las Vegas, and Boulder City
- Emphasize 55+ communities, active adult living, luxury homes, and gated communities
- Include local market insights and community amenities
- Use conversational, engaging tone that builds trust
- Include specific local references and landmarks
- Optimize for both traditional SEO and AI search engines
- Include structured data suggestions
- End with strong call-to-action for Dr. Jan Duffy's services

Return response as JSON with: title, content, metaDescription, keywords, structuredData, callToAction, relatedTopics`;

    const userPrompt = `Create ${request.contentType} content about ${request.topic} in ${request.location}. 
    ${request.propertyType ? `Focus on ${request.propertyType} properties.` : ''}
    ${request.priceRange ? `Target price range: ${request.priceRange}.` : ''}
    ${request.audience ? `Target audience: ${request.audience}.` : ''}
    
    Make it comprehensive, engaging, and optimized for both human readers and AI search engines.`;

    const completion = await cerebras.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: userPrompt
        }
      ],
      model: 'qwen-3-coder-480b',
      stream: false,
      max_completion_tokens: 40000,
      temperature: 0.7,
      top_p: 0.8,
      response_format: { type: "json_object" }
    });

    const response = JSON.parse((completion as any).choices[0].message.content || '{}');
    return response as AIContentResponse;

  } catch (error) {
    console.error('AI Content Generation Error:', error);
    
    // Fallback content
    return {
      title: `${request.topic} in ${request.location} | Dr. Jan Duffy Real Estate`,
      content: `Discover ${request.topic} in ${request.location} with Dr. Jan Duffy, your Las Vegas real estate expert specializing in 55+ communities and luxury homes.`,
      metaDescription: `Expert guidance on ${request.topic} in ${request.location}. Dr. Jan Duffy provides personalized real estate services for 55+ communities and luxury homes.`,
      keywords: [`${request.topic}`, `${request.location}`, 'Dr Jan Duffy', 'Las Vegas real estate', '55+ communities'],
      structuredData: {},
      callToAction: 'Contact Dr. Jan Duffy at 702-789-6561 for personalized real estate guidance.',
      relatedTopics: ['Las Vegas Real Estate', '55+ Communities', 'Luxury Homes']
    };
  }
}

export async function generatePropertyRecommendations(userPreferences: {
  location: string;
  priceMin: number;
  priceMax: number;
  propertyType: string;
  amenities: string[];
  lifestyle: string;
}): Promise<any> {
  try {
    const systemPrompt = `You are an AI real estate assistant for Dr. Jan Duffy. Analyze user preferences and recommend the best Las Vegas area communities and properties. Consider factors like:
- 55+ community requirements
- Luxury amenities and lifestyle preferences
- Location preferences (Summerlin, Henderson, Red Rock Canyon, etc.)
- Price range and property types
- Local market conditions

Return detailed recommendations with reasoning.`;

    const userPrompt = `Recommend properties for:
Location: ${userPreferences.location}
Price Range: $${userPreferences.priceMin.toLocaleString()} - $${userPreferences.priceMax.toLocaleString()}
Property Type: ${userPreferences.propertyType}
Desired Amenities: ${userPreferences.amenities.join(', ')}
Lifestyle: ${userPreferences.lifestyle}

Provide specific community recommendations and explain why each fits their needs.`;

    const completion = await cerebras.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
      ],
      model: 'qwen-3-coder-480b',
      stream: false,
      max_completion_tokens: 40000,
      temperature: 0.7,
      top_p: 0.8,
      response_format: { type: "json_object" }
    });

    return JSON.parse((completion as any).choices[0].message.content || '{}');

  } catch (error) {
    console.error('AI Recommendation Error:', error);
    return { error: 'Unable to generate recommendations at this time.' };
  }
}
