import React, { useState } from 'react';
import { AlertTriangle, Trash2 } from 'lucide-react';
import { Button } from '../../common/Button';

export const DataDeletion: React.FC = () => {
  const [confirmation, setConfirmation] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    if (confirmation !== 'DELETE') return;

    setIsDeleting(true);
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsDeleting(false);
    // In a real app, this would initiate the account deletion process
  };

  return (
    <div className="space-y-6">
      <div className="prose max-w-none">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Delete Your Data</h2>
        <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
          <div className="flex items-start">
            <AlertTriangle className="h-5 w-5 text-red-400 mr-3" />
            <div>
              <h3 className="text-sm font-medium text-red-800">Warning</h3>
              <div className="mt-2 text-sm text-red-700">
                <p>
                  Deleting your data is permanent and cannot be undone. This will:
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>Remove all your personal information</li>
                  <li>Delete your account and profile</li>
                  <li>Remove all your reviews and comments</li>
                  <li>Cancel any active subscriptions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-medium text-gray-900 mb-2">Confirmation Required</h3>
          <p className="text-sm text-gray-600 mb-4">
            Please type "DELETE" to confirm that you want to permanently delete your data.
          </p>
          <input
            type="text"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
            placeholder="Type DELETE"
          />
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleDelete}
            disabled={confirmation !== 'DELETE' || isDeleting}
            className="bg-red-600 hover:bg-red-700 focus:ring-red-500"
          >
            <Trash2 className="h-4 w-4 mr-2" />
            {isDeleting ? 'Deleting...' : 'Delete My Data'}
          </Button>
        </div>
      </div>
    </div>
  );
};