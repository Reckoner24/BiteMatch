import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Splash() {
  const navigate = useNavigate();
  
  return (
    <>


<div className="max-w-[400px] w-full mx-auto bg-primary relative overflow-hidden shadow-2xl flex flex-col items-center justify-center" style={{"height":"100dvh","maxHeight":"100%"}}>

    {/*<!-- Splash Content -->*/}
    <div className="flex flex-col items-center justify-center fade-in-up">
        <div className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center mb-6">
            {/*<!-- Icon/Logo Placeholder -->*/}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-primary">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
        </div>
        <h1 className="font-display-lg text-[36px] font-black tracking-tighter text-on-primary">BiteMatch</h1>
        <p className="font-label-md text-primary-fixed mt-2 opacity-80 tracking-widest uppercase text-[12px]">Descubre tu antojo</p>
    </div>

</div>



    </>
  );
}
