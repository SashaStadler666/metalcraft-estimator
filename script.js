// script.js
document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculateBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    calculateBtn.addEventListener('click', calculateBudget);
    resetBtn.addEventListener('click', resetForm);
});

function calculateBudget() {
    // Preços por mm² para cada material
    const prices = {
        'aco_carbono': 0.005,
        'inox': 0.008,
        'aluminio': 0.007
    };

    // Multiplicadores de serviço
    const serviceMultipliers = {
        'corte': 1.0,
        'corte_dobra': 1.3,
        'corte_solda': 1.5,
        'completo': 2.0
    };

    // Obter valores do formulário
    const material = document.getElementById('material').value;
    const thickness = parseFloat(document.getElementById('thickness').value) || 0;
    const length = parseFloat(document.getElementById('length').value) || 0;
    const width = parseFloat(document.getElementById('width').value) || 0;
    const quantity = parseInt(document.getElementById('quantity').value) || 1;
    const service = document.getElementById('service').value;

    // Validar campos
    if (!material || !thickness || !length || !width) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Calcular área
    const area = length * width;
    
    // Calcular preço base
    let basePrice = area * prices[material] * thickness;
    
    // Aplicar multiplicador de serviço
    let totalPrice = basePrice * serviceMultipliers[service];
    
    // Aplicar quantidade
    totalPrice *= quantity;

    // Formatar para moeda brasileira
    const formattedPrice = totalPrice.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    // Mostrar resultado
    document.getElementById('totalPrice').textContent = formattedPrice;
    document.getElementById('details').textContent = 
        `${quantity} peça(s) de ${material.replace('_', ' ')} - ${service.replace(/_/g, ' + ')}`;
    
    document.getElementById('result').classList.remove('d-none');
}

function resetForm() {
    document.getElementById('budgetForm').reset();
    document.getElementById('result').classList.add('d-none');
}