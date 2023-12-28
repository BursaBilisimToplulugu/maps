import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { uploadPictureAction } from '../actions/uploadPicture.actions';

type Props = {
  remoteUrl?: string;
};

interface DropZoneFile extends File {
  preview: string;
}

const ProfileDropZone = ({ remoteUrl }: Props) => {
  const [file, setFile] = useState<DropZoneFile | null>(null);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    multiple: false,
    accept: {
      'image/*': [],
    },
    onDrop: async (acceptedFiles) => {
      const file: DropZoneFile = Object.assign(acceptedFiles[0], {
        preview: URL.createObjectURL(acceptedFiles[0]),
      });
      const formData = new FormData();
      formData.append('file', file as File);
      setFile(file);
      await uploadPictureAction(formData);
    },
  });

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => {
      file && URL.revokeObjectURL(file.preview as DropZoneFile['preview']);
    };
  }, []);

  return (
    <div
      {...getRootProps({
        className: classNames(
          'dropzone border',
          'border-4 border-primary-logoPurple rounded-3xl w-[200px] h-[200px]',
          'flex items-center justify-center text-sm relative overflow-hidden',
          'cursor-pointer'
        ),
      })}
    >
      <input {...getInputProps()} />
      {(file && file.preview) || remoteUrl ? (
        <Image
          sizes={'200px'}
          width={200}
          height={200}
          className="object-cover"
          alt="profile picture"
          priority
          src={file ? file.preview : (remoteUrl as string)}
          // Revoke data uri after image is loaded
          onLoad={() => {
            file && URL.revokeObjectURL(file.preview);
          }}
        />
      ) : (
        <p>Profile Fotoğrafı Yükle</p>
      )}
    </div>
  );
};

export default ProfileDropZone;
