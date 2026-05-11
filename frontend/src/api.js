const API_BASE = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8001';

export const generateBlueprint = async (idea, apiKey) => {
    const response = await fetch(`${API_BASE}/generate-blueprint`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idea, api_key: apiKey })
    });
    
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Failed to generate blueprint');
    }
    
    return await response.json();
};

export const regenerateSection = async (id, section, apiKey) => {
    const response = await fetch(`${API_BASE}/regenerate-section`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, section, api_key: apiKey })
    });
    
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.detail || 'Failed to regenerate section');
    }
    
    return await response.json();
};
