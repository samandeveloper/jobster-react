//Loading spinner is going to show in the dashboard>'All jobs'>jobContainer section (under the search form)  
//we use center prop (in the component>JobContainer) wand e add the center prop to make the spinner go to the center of the page
const Loading = ({center}) => {
  return (
    <div className={center? 'loading loading-center' : 'loading'}></div>
  )
}
export default Loading