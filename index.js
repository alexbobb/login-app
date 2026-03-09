const userNameInput = document.getElementById('username-input')
const profileButton = document.getElementById('get-profile')
const errorMessage = document.getElementById('error-message')
const profileAvatar = document.getElementById('profile-avatar')
const profileUser = document.getElementById('profile-username')
const profileId = document.getElementById('profile-id')
const profileRepos = document.getElementById('profile-repos')
const finderContainer = document.getElementById('profile-finder-container')
const resultContainer = document.getElementById('profile-result-container')
const getNewProfile = document.getElementById('get-new-profile')

document.querySelector('#get-profile').addEventListener('click', async function() {

   if (userNameInput.value.trim() === "") {
    errorMessage.innerText="Please Enter a username"
    return 
   }
    errorMessage.textContent = ''
   
   try {
     const response = await fetch(`https://api.github.com/users/${userNameInput.value.trim()}`)

     if (!response.ok) {
            errorMessage.textContent = 'User not found. Please try another username.'
            return
        }
        const data = await response.json()
        console.log(data)
   
        profileAvatar.src = data.avatar_url
        profileUser.textContent = `User: ${data.login}`
        profileId.textContent = `ID: ${data.id}`
        profileRepos.textContent = `Public Repos: ${data.public_repos}`

        finderContainer.classList.add('hidden')
        resultContainer.classList.remove('hidden')
    }
    catch(error){
     errorMessage.innerText="Oops, something went wrong"
     console.log(error)
   }
   }) 

// Reset the view
 getNewProfile.addEventListener('click', function() {
    finderContainer.classList.remove('hidden')
    resultContainer.classList.add('hidden')
    userNameInput.value = ""
 })
