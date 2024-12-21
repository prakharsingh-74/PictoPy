import React from 'react';
import { Button } from '../ui/button';
import { open } from '@tauri-apps/plugin-dialog';
import { FolderPlus } from 'lucide-react';
interface FolderPickerProps {
  setFolderPath: (path: string) => void;
  className?: string;
  settingsPage?: boolean;
}

const FolderPicker: React.FC<FolderPickerProps> = ({
  setFolderPath,
  className,
  settingsPage,
}) => {
  const pickFolder = async () => {
    try {
      const selected = await open({
        directory: true,
        multiple: false,
        title: 'Select a folder',
      });
      if (selected && typeof selected === 'string') {
        setFolderPath(selected);
      }
    } catch (error) {
      console.error('Error picking folder:', error);
    }
  };

  return (
    <div className="flex w-full gap-3">
      <Button
        onClick={pickFolder}
        variant="outline"
        className={
          `flex items-center justify-center border-white text-gray-50 hover:text-accent-foreground dark:border-gray-500 dark:hover:bg-gray-700` +
          className
        }
      >
        <FolderPlus className="h-[18px] w-[18px]" />
        <p className={`ml-2 ${!settingsPage && 'hidden lg:inline'}`}>
          {' '}
          Add folder
        </p>
      </Button>
    </div>
  );
};

export default FolderPicker;
