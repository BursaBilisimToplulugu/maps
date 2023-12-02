import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';

type Props = {};

interface DropZoneFile extends File {
  preview: string;
}

const ProfileDropZone = (props: Props) => {
  const [file, setFile] = useState<DropZoneFile | null>(null);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    multiple: false,
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      const file: DropZoneFile = Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      });

      console.log('file here', file.preview);
      setFile(file);
    },
  });
  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => {
      file && URL.revokeObjectURL(file.preview);
    };
  }, []);
  return (
    <div
      {...getRootProps({
        className: classNames(
          'dropzone border',
          'border-4 border-primary-logoPurple rounded-3xl w-[200px] h-[200px]',
          'flex items-center justify-center text-sm relative overflow-hidden'
        ),
      })}
    >
      <input {...getInputProps()} />
      {file ? (
        <Image
          fill
          className="object-cover"
          alt="profile picture"
          src={file.preview}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      ) : (
        <p>Profile Fotoğrafı Yükle</p>
      )}
    </div>
  );
};

export default ProfileDropZone;
