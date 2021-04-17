restart:
	docker-compose down
	docker-compose up -d 
	docker logs calluhelp_api_1 -f

start:
	docker-compose up -d 
	docker logs calluhelp_api_1 -f

stop:
	docker-compose down

test:
	LOGGER=false 
	docker exec -it calluhelp_api_1 npm test
