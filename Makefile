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
	${DOCKER_RUN} api yarn install
.PHONY: install

update:
	${DOCKER_RUN} api yarn upgrade
.PHONY: update

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
exec-api:
	${DOCKER_COMPOSE} exec api /bin/sh
.PHONY: exec-api

exec-ui:
	${DOCKER_COMPOSE} exec ui /bin/sh
.PHONY: exec-ui

yarn:
	${DOCKER_RUN} api /bin/sh
.PHONY: yarn
