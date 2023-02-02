import React from 'react';
import { useNavigate } from 'react-router-dom';
import Data from '../utilities/mockData';
// import { Link } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    const list = () => {
        const items = [];
        for (let i = 0; i < Data.length; i++) {
            items.push(
                <div key={Data[i].id} onClick={() => navigate(`/edit/${Data[i].id}`, { state: Data[i] })} className="p-6 max-w-sm my-2 mx-3 cursor-pointer bg-white rounded-xl shadow-lg flex items-center space-x-4">
                    <div className="shrink-0">
                        <img className="h-12 w-12" src={require(`../images/${Data[i].imageUrl}`)} alt="Burger Pic" />
                    </div>
                    <div>
                        <div className="text-xl font-medium text-black">{Data[i].name}</div>
                        <p className="text-slate-500">{Data[i].description}</p>
                    </div>
                </div>
            );
        }
        return items;
    }
    return (
        <>
            {list()}
        </>
    );

}