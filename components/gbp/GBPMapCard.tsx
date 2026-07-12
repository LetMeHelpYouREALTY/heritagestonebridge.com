import Link from "next/link";
import { Phone, MapPin, Navigation, Star, PenLine } from "lucide-react";
import { SITE_CONTACT } from "@/lib/site-contact";
import { telHref } from "@/lib/phone";
import {
  buildDirectionsUrl,
  buildMapsEmbedUrl,
  buildMapsSearchUrl,
  buildReviewsUrl,
  buildWriteReviewUrl,
  reviewsDisabled,
} from "@/lib/reviews";

type GBPMapCardProps = {
  className?: string;
  mapHeight?: number;
};

export default function GBPMapCard({
  className = "",
  mapHeight = 300,
}: GBPMapCardProps) {
  const hideReviews = reviewsDisabled();

  return (
    <div className={className}>
      <div className="mb-4 space-y-3 rounded-lg bg-slate-50 p-4">
        <p className="font-semibold text-slate-900">{SITE_CONTACT.businessName}</p>
        <address className="not-italic text-sm text-slate-700">
          {SITE_CONTACT.address.streetAddress}
          <br />
          {SITE_CONTACT.address.addressLocality}, {SITE_CONTACT.address.addressRegion}{" "}
          {SITE_CONTACT.address.postalCode}
        </address>
        <p className="text-sm text-slate-600">
          <span className="font-medium">Hours:</span> Mon–Fri 9am–6pm, Sat 10am–4pm, Sun by
          appointment
        </p>
      </div>

      <div className="mb-4 overflow-hidden rounded-xl shadow-md">
        <iframe
          src={buildMapsEmbedUrl()}
          width="100%"
          height={mapHeight}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${SITE_CONTACT.businessName} — Google Map`}
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Link
          href={telHref(SITE_CONTACT.phone.tel)}
          className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          <Phone className="mr-2 h-4 w-4 shrink-0" aria-hidden />
          Call
        </Link>
        <a
          href={buildDirectionsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-lg bg-slate-100 px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200"
        >
          <Navigation className="mr-2 h-4 w-4 shrink-0" aria-hidden />
          Directions
        </a>
        {!hideReviews && (
          <>
            <a
              href={buildReviewsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-slate-100 px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200"
            >
              <Star className="mr-2 h-4 w-4 shrink-0" aria-hidden />
              Reviews
            </a>
            <a
              href={buildWriteReviewUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-slate-100 px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200"
            >
              <PenLine className="mr-2 h-4 w-4 shrink-0" aria-hidden />
              Write Review
            </a>
          </>
        )}
        {hideReviews && (
          <a
            href={buildMapsSearchUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2 inline-flex items-center justify-center rounded-lg bg-slate-100 px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-200 sm:col-span-2"
          >
            <MapPin className="mr-2 h-4 w-4 shrink-0" aria-hidden />
            View on Google Maps
          </a>
        )}
      </div>
    </div>
  );
}
