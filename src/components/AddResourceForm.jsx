import React, { useState } from 'react';
import { useStore } from '../store';

const AddResourceForm = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(50);
    const [unit, setUnit] = useState('%');

    const createResource = useStore((state) => state.createResource);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validazione semplice
        if (!name.trim()) {
            alert('Il nome è obbligatorio!');
            return;
        }

        // Crea la risorsa
        await createResource({
            name: name.trim(),
            quantity: Number(quantity),
            unit
        });

        // Reset del form
        setName('');
        setQuantity(50);
        setUnit('%');
    };

    return (
        <div style={{
            border: '2px solid #4a4a4a',
            borderRadius: '8px',
            padding: '20px',
            margin: '20px auto',
            maxWidth: '500px',
            backgroundColor: '#2a2a2a',
            color: 'white'
        }}>
            <h2 style={{ marginTop: 0 }}>Aggiungi Nuova Risorsa</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>
                        Nome Risorsa:
                    </label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="es. Ossigeno, Carburante..."
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #555',
                            backgroundColor: '#1a1a1a',
                            color: 'white',
                            fontSize: '14px'
                        }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>
                        Quantità:
                    </label>
                    <input
                        type="number"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min="0"
                        max="100"
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid #555',
                            backgroundColor: '#1a1a1a',
                            color: 'white',
                            fontSize: '14px'
                        }}
                    />
                </div>

                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                    <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '5px' }}>
                            Unità:
                        </label>
                        <select
                            value={unit}
                            onChange={(e) => setUnit(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '8px',
                                borderRadius: '4px',
                                border: '1px solid #555',
                                backgroundColor: '#1a1a1a',
                                color: 'white',
                                fontSize: '14px'
                            }}
                        >
                            <option value="%">% (percentuale)</option>
                            <option value="kg">kg (chilogrammi)</option>
                            <option value="L">L (litri)</option>
                            <option value="m³">m³ (metri cubi)</option>
                        </select>
                    </div>
                </div>

                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '10px',
                        borderRadius: '4px',
                        border: 'none',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#45a049'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#4CAF50'}
                >
                    Aggiungi Risorsa
                </button>
            </form>
        </div>
    );
};

export default AddResourceForm;