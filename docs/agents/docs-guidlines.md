Agent Documentation Instruction Template

Objective: Generate thorough, structured, and detailed documentation for software updates, development processes, and fixes. The documentation should be complete enough that it could be shared as technical content without revealing its use for public blogging.

1. Change Log Section

Record every change made to the system or software.

For each change, include:

Date/time of change

Component or module affected

Description of the change (what was added, updated, or removed)

Reason for the change (why it was necessary)

Dependencies affected, if any

Example:

2025-11-25
Module: Authentication API
Change: Updated login endpoint to support new token format
Reason: Increase security and support short-lived JWTs
Dependencies: Frontend login form, refresh token service

2. Issues Encountered

Document any bugs, errors, or obstacles encountered during development, testing, or deployment.

For each issue:

Issue title

Description of the problem

Steps to reproduce

Impact on system

Priority / severity

Example:

Issue: Token refresh fails intermittently
Description: Some refresh tokens were rejected by backend after 1 hour
Steps to reproduce: Login, wait 1 hour, refresh token
Impact: Users may be logged out unexpectedly
Priority: High

3. Fixes Implemented

Document the solutions applied to fix the issues.

For each fix, include:

Date/time

Issue reference

Description of the fix

Testing or verification performed

Example:

Date: 2025-11-25
Issue: Token refresh fails intermittently
Fix: Updated backend JWT verification logic to handle clock drift
Verification: Tested with multiple time zones, passed all test cases

4. Readme / Overview

Provide a high-level description of the system/module.

Include:

Purpose and functionality

Key modules/components

Dependencies and requirements

Installation and usage instructions

Example:

Project: RackDRAC Backend
Purpose: Provide API endpoints to control and monitor servers remotely
Key Modules: Auth API, Server API, Logging Service
Dependencies: Java 21, Maven 3.9.11, MySQL 8.0
Installation: Use Maven to build project, run with Java 21
Usage: API endpoints exposed on localhost:8080, JSON payloads expected

5. Style / Formatting Guidelines

Use clear headings, bullet points, and tables where appropriate.

Include dates for all entries.

Maintain chronological order.

Always include context, so someone unfamiliar with the system can understand the changes.

6. Optional Enhancements

Include lessons learned or observations during implementation.

Include performance improvements or optimizations done.

Suggest next steps or future considerations.