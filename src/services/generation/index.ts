async function getCurrentGenerations() {
  const response = await fetch("https://api.carbonintensity.org.uk/generation", {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

  return response.json()
}

export {
  getCurrentGenerations
}