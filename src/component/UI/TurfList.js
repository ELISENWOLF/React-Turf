import TurfCard from "./TurfCard"

const TurfList = ({ data }) => {
  return (
    <>
      {
        data?.map((item, index) => (
          <TurfCard item={item} key={index} />
        ))
      }
    </>
  )
}

export default TurfList