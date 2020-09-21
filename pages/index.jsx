import { useEffect } from 'react'
import { Router } from '../i18n'

const Index = () => {
	// Index page redirect to home
	useEffect(() => {
		async function redirect() {
			Router.push('/home')
		}
		redirect()
	}, [])
	return null
}

export default Index
