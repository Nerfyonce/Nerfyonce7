document.getElementById('voucherForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cardNumber = document.getElementById('cardNumber').value;
    const resultDiv = document.getElementById('voucherResult');

    if (!cardNumber) {
        resultDiv.textContent = 'Nomor kartu harus diisi.';
        return;
    }

    const url = `https://api.teeg.cloud/vouchers/campaigns/4VKE4OE/cards/${cardNumber}?tz=MIDB9A0TV9`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzI3OTg2MTI5LCJuYmYiOjE3Mjc5ODUyMjksImlwQWRkcmVzcyI6IjEyNS4xNjYuMS43OSIsImlwYWRkciI6IjEyNS4xNjYuMS43OSIsIm9pZCI6IjA3YmRmY2VjLTA2ZDQtNDBiYy05MDMwLWVmMTIxNWRhYWEzNiIsInN1YiI6IjA3YmRmY2VjLTA2ZDQtNDBiYy05MDMwLWVmMTIxNWRhYWEzNiIsInBob25lIjoiKzYyODIxMzExMDY2MDciLCJ0aWQiOiJhZjIxZTA1Ni0wYTIxLTRkODMtYjVkZC00NGM0MzlmYThmMzAiLCJub25jZSI6ImE1ODNiY2VmLTAzZjQtNDFmZS1iM2ZkLWI2MGNhN2M4MWI5MSIsInNjcCI6ImFsbC1hcGlzIiwiYXpwIjoiY2EwZTQ4NjgtMTc3Yi00OWQyLThjNjMtZjEwNDRlM2VkYzYzIiwidmVyIjoiMS4wIiwiaWF0IjoxNzI3OTg1MjI5fQ.bSiBTgG10CCQUoK3Cq1L5dbt_jPlWXB5dHWm8TpyTllZSdTA1615yA68nne6jGWw393lctCQ0WaxBy7N1ypxWy_Z9Ehto3HIdVjwrcXp16V6oflIAQnH5grdTa9LGsHfTSY_nW4QYDBAlqU0InSKDlqmgH3UsZw-K2US63ILjlI4o1NVpW71RB0atm5lgAQK1zAXMKbMago_WHKuRmiP4vaQTqJPT4n9ggStfGHCol_gt7OhY_GmZSfhWkY_pLYEvNroK9EvTPG2wGNtmXB39fCBh7hBr3hcHBCwErVNV6qv1rKE3bay5he7zulf1mCd8lAzAU6xYbeI0vDmZLRh3A'
        }
    })
    .then(response => response.json())
    .then(data => {
        if (data) {
            resultDiv.textContent = `Voucher berhasil di-generate: ${JSON.stringify(data)}`;
        } else {
            resultDiv.textContent = 'Voucher tidak ditemukan.';
        }
    })
    .catch(error => {
        resultDiv.textContent = 'Terjadi kesalahan saat menghubungi server.';
        console.error('Error:', error);
    });
});
