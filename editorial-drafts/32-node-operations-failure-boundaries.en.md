# Operating a Sails Node: Responsibilities and Failure Boundaries

*Draft only. No publication approval. Season 5, article 32.*

## Question

A node that restarts halfway through a trade cannot rely on remembering what was in process memory. Its responsibilities must be recoverable from durable state and verified external observations.

## Boundary and design

A node implementation may enforce authorization, transition validity, replay resistance and durable effects. Operators additionally need secrets management, database lifecycle, backups, migrations, monitoring and incident response. None of this makes a node the custodian of a user's wallet by default.

## Failure and evidence

A restart drill should interrupt a trade between durable commit and client acknowledgment, then prove that replay does not duplicate economic effects. Deployment requirements and supported node topology must be verified before this becomes an operator manual.

*Source verification and exact API references pending.*
