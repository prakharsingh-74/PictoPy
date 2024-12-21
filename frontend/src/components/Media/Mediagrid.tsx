// components/MediaGallery/MediaGrid.tsx
import { MediaGridProps } from '@/types/Media';
import MediaCard from './MediaCard';

export default function MediaGrid({
  mediaItems,
  itemsPerRow,
  openMediaViewer,
  type,
}: MediaGridProps) {
  if (mediaItems.length === 0) {
    return (
      <div className="flex h-96 items-center justify-center">
        <h1 className="text-2xl font-bold">No media found</h1>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-[repeat(auto-fill,_minmax(224px,_1fr))] gap-4`}
    >
      {mediaItems.map((item, index) => (
        <div
          key={index}
          onClick={() => openMediaViewer(index)}
          className="h-56 cursor-pointer"
        >
          <MediaCard item={item} type={type} />
        </div>
      ))}
    </div>
  );
}
