import React, { useState } from 'react';

const ColorR = ({ couleur }) => {
    const [color, setColor] = useState(couleur);

    // Fonction pour générer une couleur aléatoire
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let randomColor = '#';
        for (let i = 0; i < 6; i++) {
            randomColor += letters[Math.floor(Math.random() * 16)];
        }
        return randomColor;
    };

    // Change la couleur lorsqu'on survole le texte
    const handleMouseEnter = () => {
        setColor(getRandomColor());
    };

    return (
        <div>
            <div 
                style={{ color, fontSize: '20px', fontWeight: 'bold', cursor: 'pointer' }}
                onMouseEnter={handleMouseEnter} // Survol du texte
            >
                Survole-moi pour changer de couleur !
            </div>
            <button onClick={() => setColor(getRandomColor())}>Change la couleur</button>
        </div>
    );
};

export default ColorR;
