import { component$ } from "@builder.io/qwik";

interface BreadcrumbItem {
  name: string;
  url?: string;
  position: number;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbNavigation = component$<BreadcrumbNavigationProps>(({ items }) => {
  return (
    <nav aria-label="Breadcrumb" class="mb-6">
      <ol
        class="flex flex-wrap items-center space-x-2 text-sm text-gray-600"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => (
          <li
            key={item.position}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            class="flex items-center"
          >
            {item.url ? (
              <a href={item.url} itemProp="item" class="hover:text-blue-600 transition-colors">
                <span itemProp="name">{item.name}</span>
              </a>
            ) : (
              <span itemProp="name" class="text-gray-900 font-medium">
                {item.name}
              </span>
            )}
            <meta itemProp="position" content={item.position.toString()} />
            {index < items.length - 1 && <span class="mx-2 text-gray-400">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
});
