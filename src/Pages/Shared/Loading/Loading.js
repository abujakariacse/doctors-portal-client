import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-ceter h-full'>
            <div class="flex items-center justify-center ">
                <div class="w-16 h-16 border-b-4 border-gray-900 rounded-full animate-spin"></div>
            </div>
        </div>

    );
};

export default Loading;