import Title from "../../ui/Title"
import { shortcutLink } from "../../constants"
import { IoIosArrowForward } from "react-icons/io"
const ShortCut = () => {
  return (
	<div className="flex gap-4 flex-col p-4 bg-white rounded-lg dark:bg-gray-600">
		<Title>Shortcuts</Title>
		{
			shortcutLink.map((list, index) => (
				<div key={index} className="flex justify-between cursor-pointer rounded-sm">
					<div className="flex items-center gap-3">
						<span className="bg-blue-200 p-2 rounded-full w-8 h-8 flex items-center justify-between dark:bg-gray-800 dark:text-gray-300">
							<list.icon/>
						</span>
						<h3 className="font-medium dark:text-gray-300">
							{list.title}
						</h3>
					</div>
					<span className="bg-gray-300 p-2 rounded-md dark:bg-gray-700 dark:text-gray-300 hover:mr-3 transition-all duration-500">
						<IoIosArrowForward/>
					</span>
				</div>
			))
		}
	</div>
  )
}

export default ShortCut