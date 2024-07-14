// Função para criptografar o texto
function criptografarTextoFuncao(texto) {
    const substituicao = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
    };

// Verificar se o texto contém caracteres não permitidos
     if (/[^a-z\s]/.test(texto)) {
     alert('Por favor, digite apenas letras minúsculas e espaços.');
     return ''; // Retorna uma string vazia se houver caracteres não permitidos
     }

    let textoCriptografado = '';
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i].toLowerCase(); // Converter para minúsculas para comparação case-insensitive
        if (substituicao[char]) {
            textoCriptografado += substituicao[char];
        } else {
            textoCriptografado += char;
        }
    }

    return textoCriptografado.trim(); // Remove espaços em branco extras
}

// Função para descriptografar o texto
function descriptografarTextoFuncao(textoCriptografado) {
    const substituicao = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };
    
    // Criar uma expressão regular para encontrar as palavras criptografadas
    let regex = new RegExp(Object.keys(substituicao).join('|'), 'gi');

    // Substituir as palavras criptografadas pelos caracteres originais
    let textoDescriptografado = textoCriptografado.replace(regex, function(matched) {
        return substituicao[matched.toLowerCase()];
    });

    return textoDescriptografado;
}