

const FeedbackItem = ({item}) => {
  return (
   <div className="card">
    <div className="num-display">{item.rating}</div>
    <div className="text-display">{item.text}</div>
    <button>
        
    </button>
   </div>
  )
}

export default FeedbackItem


