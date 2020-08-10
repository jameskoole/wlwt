$(document).ready(function() {

	// next game
	$.getJSON( "https://statsapi.web.nhl.com/api/v1/teams/10?expand=team.schedule.next ", function( data ) {
		// console.log(data);

		let nextGame = data.teams[0].nextGameSchedule.dates[0];
		// console.log(nextGame)
		$("div.nextGameDate").html(moment(nextGame.date).format('LL'));
		$("div.nextGameHome").html(nextGame.games[0].teams.home.team.name);
		$("div.nextGameAway").html(nextGame.games[0].teams.away.team.name);
		
		$("div.nextGameScore").html(nextGame.games[0].teams.away.score + " - " + nextGame.games[0].teams.home.score);
	});    
});