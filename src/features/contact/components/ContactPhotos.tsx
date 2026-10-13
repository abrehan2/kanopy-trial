import { AppImage } from '@/components/media/AppImage';
import type { ContactPhoto } from '@/features/contact/data/contact-offices';

type ContactPhotosProps = { photos: ContactPhoto[] };

export function ContactPhotos({ photos }: ContactPhotosProps) {
  return (
    <section
      data-testid="contact-photos"
      className="flex min-w-0 gap-8 overflow-x-clip px-page-x pb-section-y max-compact:hidden"
    >
      {photos.map((photo) => (
        <figure key={photo.caption} className="flex min-w-px flex-1 flex-col gap-3">
          <AppImage
            src={photo.src}
            alt={photo.alt}
            width={640}
            height={400}
            className="h-contact-photo-h w-full rounded-sm object-cover max-compact:h-photo-h-sm"
          />
          <figcaption className="font-jost text-crumb text-stone">{photo.caption}</figcaption>
        </figure>
      ))}
    </section>
  );
}
