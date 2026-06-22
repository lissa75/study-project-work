import "./app-filter.css";

const AppFilter = (props) => {
    // const { OnFilterIncrease, data } = props

    // const onFilterIncrease = () => {
    //     const filterData = OnFilterIncrease(data)
    //     return filterData
    // }

    return (
        <div className="btn-group">
            <button type="button"
                className="btn btn-light" >
                Все сотрудники
            </button>
            <button type="button"
                className="btn btn-outline-light"
                >
                На повышение
            </button>
            <button type="button"
                className="btn btn-outline-light">
                З/П больше 1000$
            </button>
        </div>
    )
}

export default AppFilter;