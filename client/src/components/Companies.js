import Company from "./Company"

const Companies = ({companies, onEdit}) => {
    return (
        <div>
            {companies.map((company, index) => (
                <Company company={company} key={index} onEdit={onEdit}></Company> 
            ))}
        </div>
    )
}

export default Companies