function handleSubmit(event) {
    event.preventDefault();
    
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('loadingSpinner').style.display = 'block';
    
    setTimeout(() => {
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('loadingSpinner').style.display = 'none';
        
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
        
        document.getElementById('registrationForm').reset();
    }, 1000);
}