import './index.css'

const LatestMatch = ({ latestMatchData }) => {
    if (!latestMatchData) {
        return <p>No latest match data available</p>;
    }

    const {
        competingTeam,
        competingTeamLogo,
        date,
        venue,
        result,
        firstInnings,
        secondInnings,
        manOfTheMatch,
        umpires,
    } = latestMatchData;

    return (
        <div className="latest-match-container">
            <div className="competing-team-info">
                <h1>{competingTeam}</h1>
                <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
            </div>
            <div className="match-details">
                <p>{date}</p>
                <p>{venue}</p>
                <p>{result}</p>
            </div>

            <div className="latest-match-logo">
                <img
                    src={competingTeamLogo}
                    className="latest-match-team-logo"
                    alt={`latest match ${competingTeam}`}
                />
            </div>

            <hr className="separator" />

            <div className="latest-match-details-2">
                <p className="latest-match-details-label">First Innings</p>
                <p className="latest-match-details-value">{firstInnings}</p>
                <p className="latest-match-details-label">Second Innings</p>
                <p className="latest-match-details-value">{secondInnings}</p>
                <p className="latest-match-details-label">Man Of The Match</p>
                <p className="latest-match-details-value">{manOfTheMatch}</p>
                <p className="latest-match-details-label">Umpires</p>
                <p className="latest-match-details-value">{umpires}</p>
            </div>
        </div>
    );
};

export default LatestMatch;
