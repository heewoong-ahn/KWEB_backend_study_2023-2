select users.id, name, seat_number from users inner join tickets on users.id=user where train=11 order by seat_number;

select users.id, name, count(*) as trains_count, sum(distance) as total_distance from tickets join trains on trains.id = tickets.train join users on users.id= tickets.user group by users.id order by total_distance desc limit 6;

select trains.id, types.name as type, stations.name as src_stn, stations2.name as dst_stn, timediff(arrival, departure) as travel_time from trains join types on types.id= trains.type join stations on stations.id = trains.source join stations as stations2 on trains.destination=stations2.id order by travel_time desc limit 6;

select types.name as type, stations.name as src_stn, stations2.name as dst_stn, trains.departure, trains.arrival, round(types.fare_rate/100 * trains.distance/10, -2) as fare from trains join types on types.id = trains.type join stations on stations.id = trains.source join stations as stations2 on stations2.id = trains.destination order by departure;

select trains.id, types.name as type, stations.name as src_stn, stations2.name as dst_stn, count(*) as occupied, types.max_seats as maximum from tickets join trains on trains.id = tickets.train join types on types.id =trains.type join stations on stations.id = trains.source join stations as stations2 on stations2.id = trains.destination group by trains.id order by trains.id;

SELECT `trains`.`id`, `types`.`name` AS `type`,`src`.`name` AS `src_stn`, `dst`.`name` AS `dst_stn`,Count(tickets.train) AS `occupied`, `types`.`max_seats` AS `maximum`FROM `tickets`right JOIN `trains` ON `trains`.`id` = `tickets`.`train`INNER JOIN `types` ON `types`.`id` = `trains`.`type`INNER JOIN `stations` AS `src` ON `src`.`id` = `trains`.`source`INNER JOIN `stations` AS `dst` ON `dst`.`id` = `trains`.`destination` GROUP BY trains.id order by trains.id asc;

