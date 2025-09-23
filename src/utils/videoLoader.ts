type VideoItem = {
  src: string;
  title: string;
  category: string;
  type: string;
};

const prettifyFileName = (fileName: string): string => {
  const baseName = fileName.replace(/\.[^/.]+$/, '');
  
  if (baseName === 'video') {
    return 'Featured Video';
  }
  
  if (baseName.startsWith('v12044gd')) {
    return 'Social Media Content';
  }
  
  if (baseName.startsWith('v15044gf')) {
    return 'Brand Showcase';
  }
  
  return baseName
    .replace(/^v\d+[a-z0-9]*/, '')
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase())
    .trim() || 'Video Content';
};

const getVideoType = (fileName: string): string => {
  const ext = fileName.split('.').pop()?.toLowerCase();
  switch (ext) {
    case 'mp4':
      return 'video/mp4';
    case 'mov':
      return 'video/quicktime';
    default:
      return 'video/mp4';
  }
};

export const loadVideos = (): VideoItem[] => {
  const modules = import.meta.glob('../assets/videos/*.{mp4,mov}', { eager: true }) as Record<
    string,
    { default: string }
  >;

  const categories = ['Social Media', 'Digital Marketing', 'Brand Management'];
  
  return Object.entries(modules)
    .map(([path, mod], index) => {
      const fileName = path.split('/').pop()!;
      const baseName = fileName.replace(/\.[^/.]+$/, '');
      
      let title = prettifyFileName(fileName);
      let category = 'Social Media';
      
      if (baseName === 'video') {
        title = 'Featured Video';
        category = 'Brand Management';
      } else if (baseName.startsWith('v12044gd')) {
        title = `Social Media Content ${index + 1}`;
        category = 'Social Media';
      } else if (baseName.startsWith('v15044gf')) {
        title = `Brand Showcase ${index + 1}`;
        category = categories[index % categories.length];
      }
      
      return {
        src: mod.default,
        title,
        category,
        type: getVideoType(fileName)
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
};
