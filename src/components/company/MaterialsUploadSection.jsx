import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Plus, X, UploadCloud } from 'lucide-react';

export default function MaterialsUploadSection() {
  const [materials, setMaterials] = useState([{ id: Date.now(), file: null }]);

  // Add a new empty upload row
  const addMaterialRow = () => {
    setMaterials([...materials, { id: Date.now(), file: null }]);
  };

  // Handle the file selection
  const handleFileChange = (id, selectedFile) => {
    if (selectedFile) {
      setMaterials(materials.map(mat => 
        mat.id === id ? { ...mat, file: selectedFile } : mat
      ));
    }
  };

  // Remove a specific row
  const removeMaterialRow = (id) => {
    setMaterials(materials.filter(mat => mat.id !== id));
  };

  return (
    <div className="space-y-6">
      <div>
        <Label className="text-xl font-bold text-gray-900">Upload Company Materials (Max 500mb)</Label>
        <p className="text-gray-500 text-sm font-medium leading-relaxed mt-2">
          Use the Upload area to share completed projects, past performance details, testimonials, case studies, videos, capability statement. (Max file size - 500MB)
        </p>
      </div>

      <div className="space-y-4">
        {materials.map((mat) => (
          <div key={mat.id} className="flex items-center gap-3 w-full max-w-[600px]">
            
            <div className="relative flex border border-gray-300 hover:border-iwePrimary rounded-lg overflow-hidden h-14 flex-1 shadow-sm transition-colors group cursor-pointer bg-white">
              
              <input 
                type="file" 
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                onChange={(e) => handleFileChange(mat.id, e.target.files[0])}
                title="Click to upload a file"
              />
              
              <div className="bg-iwePrimary hover:bg-iwePrimaryHover text-white border-r border-gray-500 px-6 sm:px-8 text-base flex items-center justify-center font-bold transition-colors shrink-0 gap-2">
                <UploadCloud className="w-5 h-5 text-white group-hover:text-iwePrimary transition-colors" />
                Upload File
              </div>
              
              <div className={`flex-1 px-4 flex items-center text-base truncate ${mat.file ? 'text-gray-900 font-medium' : 'text-gray-400'}`}>
                {mat.file ? mat.file.name : "No file selected"}
              </div>

            </div>

            {/* Delete button */}
            {materials.length > 1 && (
              <button 
                type="button" 
                onClick={() => removeMaterialRow(mat.id)}
                className="text-gray-400 hover:text-red-500 transition-colors p-2 shrink-0 bg-white rounded-full hover:bg-red-50"
                aria-label="Remove material row"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        ))}
      </div>
      
      <button 
        type="button" 
        onClick={addMaterialRow}
        className="text-iwePrimary hover:text-iwePrimaryHover text-base font-bold flex items-center gap-1.5 transition-colors mt-2 w-fit"
      >
        <Plus className="w-5 h-5" /> Add more materials
      </button>
    </div>
  );
}