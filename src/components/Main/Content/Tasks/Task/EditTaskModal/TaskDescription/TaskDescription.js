const TaskDescription = ({ description, setDescription }) => {
  return (
    <div className="form-descr">
        <textarea
          className="form-descr"
          name="descr-1"
          id="descr-modify"
          cols="30"
          rows="4"
          placeholder="Description"
          maxLength="300"
          value={description}
          onChange={e => setDescription(e.target.value)}
        >
        </textarea>
      </div>
  )
}

export default TaskDescription;
