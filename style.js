function translate() {
    const inputText = document.getElementById('inputText').value;
    const selectedLanguage = document.getElementById('selectLanguage').value;
    const outputTextElement = document.getElementById('outputText');
  
    if (!inputText.trim()) {
      alert('Please enter text to translate.');
      return;
    }
  
    // Replace 'YOUR_API_KEY' with your actual Google Cloud Platform API key
    const apiKey = 'trnsl.1.1.20160812T144209Z.b92c44a2b3973f9e.2cbac18d23ff1aa107e58b09a0a58d0b70151193';
  
    // Using the Google Translate API
    const apiUrl = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${apiKey}`;
   
    const requestBody = {
      q: inputText,
      target: selectedLanguage,
    };
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    })
      .then(response => response.json())
      .then(data => {
        const translatedText = data.data.translations[0].translatedText;
        outputTextElement.textContent = translatedText;
      })
      .catch(error => {
        console.error('Error translating text:', error);
        outputTextElement.textContent = 'Translation error.';
      });
  }
  