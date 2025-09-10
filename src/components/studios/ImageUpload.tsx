
'use client';

import { UploadCloud } from 'lucide-react';
import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { cn } from '@/lib/utils';

interface ImageUploadProps {
    label?: string;
    onUpload?: (file: File) => void;
}

export function ImageUpload({ label, onUpload }: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
            onUpload?.(file);
        }
    }, [onUpload]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { 'image/*': ['.jpeg', '.png', '.jpg'] },
        multiple: false,
    });

    return (
        <div
            {...getRootProps()}
            className={cn(
                "relative flex flex-col items-center justify-center w-full aspect-video p-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors",
                isDragActive ? "border-primary bg-primary/10" : "border-gray-300 hover:border-primary/50"
            )}
        >
            <input {...getInputProps()} />
            {preview ? (
                <img src={preview} alt="Preview" className="h-full w-full object-contain" />
            ) : (
                <div className="text-center text-muted-foreground">
                    <UploadCloud className="mx-auto h-8 w-8 mb-2" />
                    {label && <p className="text-sm">{label}</p>}
                </div>
            )}
        </div>
    );
}
