import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Oval } from 'react-loader-spinner';
import LatestMatch from '../LatestMatch';
import MatchCard from '../MatchCard';
import './index.css';

const teamMatchesApiUrl = 'https://apis.ccbp.in/ipl/';

const TeamMatches = () => {
    const { id } = useParams(); // useParams hook to get route params (id)
    const [isLoading, setIsLoading] = useState(true);
    const [teamMatchesData, setTeamMatchesData] = useState({});

    useEffect(() => {
        const getTeamMatches = async () => {
            const response = await fetch(`${teamMatchesApiUrl}${id}`);
            const fetchedData = await response.json();

            if (fetchedData) {
                const formattedData = {
                    teamBannerURL: fetchedData.team_banner_url,
                    latestMatch: fetchedData.latest_match_details
                        ? getFormattedData(fetchedData.latest_match_details)
                        : null,
                    recentMatches:
                        fetchedData.recent_matches?.map(eachMatch => getFormattedData(eachMatch)) || [],
                };
                setTeamMatchesData(formattedData);
                setIsLoading(false);
            }
        };

        getTeamMatches();
    }, [id]);

    const getFormattedData = data => ({
        umpires: data.umpires,
        result: data.result,
        manOfTheMatch: data.man_of_the_match,
        id: data.id,
        date: data.date,
        venue: data.venue,
        competingTeam: data.competing_team,
        competingTeamLogo: data.competing_team_logo,
        firstInnings: data.first_innings,
        secondInnings: data.second_innings,
        matchStatus: data.match_status,
    });

    const renderRecentMatchesList = () => {
        const { recentMatches } = teamMatchesData;

        if (!recentMatches || recentMatches.length === 0) {
            return <p>No recent matches available</p>;
        }

        return (
            <ul className="recent-matches-list">
                {recentMatches.map(recentMatch => (
                    <MatchCard matchDetails={recentMatch} key={recentMatch.id} />
                ))}
            </ul>
        );
    };

    const renderTeamMatches = () => {
        const { teamBannerURL, latestMatch } = teamMatchesData;

        return (
            <div className="responsive-container">
                <img src={teamBannerURL} alt="team banner" className="team-banner" />
                {latestMatch ? (
                    <LatestMatch latestMatchData={latestMatch} />
                ) : (
                    <p>No latest match data available</p>
                )}
                {renderRecentMatchesList()}
            </div>
        );
    };

    const renderLoader = () => (
        <div data-testid="loader" className="loader-container">
            <Oval color="#ffffff" height={50} width={50} />
        </div>
    );

    const getRouteClassName = () => {
        switch (id) {
            case 'RCB':
                return 'rcb';
            case 'KKR':
                return 'kkr';
            case 'KXP':
                return 'kxp';
            case 'CSK':
                return 'csk';
            case 'RR':
                return 'rr';
            case 'MI':
                return 'mi';
            case 'SH':
                return 'srh';
            case 'DC':
                return 'dc';
            default:
                return '';
        }
    };

    const className = `team-matches-container ${getRouteClassName()}`;

    return <div className={className}>{isLoading ? renderLoader() : renderTeamMatches()}</div>;
};

export default TeamMatches;
