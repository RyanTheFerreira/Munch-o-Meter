const logout = async () => {
  try {
    // Make a POST request to destroy the session on the back end
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successfully logged out, redirect to the login page
      window.location.assign('/');
    } else {
      alert(response.statusText);
    }
  } catch (err) {
    console.log(err);
  }
  window.location.assign('/')
};

document.querySelector('#logout').addEventListener('click', logout);