DOCKER_COMPOSE ?= docker compose
DOCKER_RUN ?= ${DOCKER_COMPOSE} run --rm --service-ports
DOCKER_EXEC ?= ${DOCKER_COMPOSE} exec

# ------------------------
# Setup Targets
# ------------------------
build:
		${DOCKER_COMPOSE} build
.PHONY: build

install:
	${DOCKER_RUN} app yarn install
.PHONY: install

# ------------------------
# Re-usable Targets
# ------------------------
up-all:
	${DOCKER_COMPOSE} up -d
.PHONY: up-all

down:
	${DOCKER_COMPOSE} down
.PHONY: down

dev: down up-all
.PHONY: dev

# ------------------------
# Exec targets
# ------------------------
exec:
	${DOCKER_COMPOSE} exec app /bin/sh
.PHONY: exec-api
