const DateRange = ({ startYear, endYear, id, showOnlyEndDate = false }) => {
    // If showOnlyEndDate is true (for education), only show graduation date
    if (showOnlyEndDate && endYear) {
        const end = new Date(endYear);
        if (end != "Invalid Date") {
            return (
                <p id={id} className="sub-content whitespace-nowrap">
                    {end.toLocaleString('default', { month: 'short' })}, {end.getFullYear()}
                </p>
            );
        }
        return <p id={id} className="sub-content"></p>;
    }

    // Original behavior for work experience (show date range)
    if (!startYear) {
        return <p id={id} className="sub-content"></p>;
    }

    const start = new Date(startYear);
    const end = new Date(endYear);
    return (
        <p id={id} className="sub-content whitespace-nowrap">
            {start.toLocaleString('default', { month: 'short' })}, {start.getFullYear()} - {end != "Invalid Date" ? end.toLocaleString('default', { month: 'short' }) + ', ' + end.getFullYear() : 'Present'}
        </p>
    );
};

export default DateRange;
