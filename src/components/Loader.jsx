export default function Loader() {
  return (
    <div className='loading_container'>
      <div className='lds-ring'>
        {" "}
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className='loading_text'>Getting your events...</p>
    </div>
  );
}
