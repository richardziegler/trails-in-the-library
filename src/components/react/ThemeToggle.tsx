import { useStore } from '@nanostores/react';
import { $currentTheme } from '../../stores/themeStore';


export default function ThemeToggle() {
	type ITheme = 'light' | 'dark';
	const currentTheme = useStore($currentTheme);
	const themeOptions: ITheme[] = ['light', 'dark'];



	return (
		<>
			     <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800' onClick={() => $currentTheme.set(themeOptions.filter((theme) => theme !== currentTheme)[0])}>Toggle Theme</button>
			     <p>{currentTheme}</p>

		</>
	)
}

