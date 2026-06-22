import "./app-info.css";

const AppInfo = (props) => {
    const { employeesCount, bonusCount } = props
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N</h1>
            <h2>Общее число сотрудников: {employeesCount}</h2>
            <h2>Премию получат: {bonusCount}</h2>
        </div>
    )
}

export default AppInfo;