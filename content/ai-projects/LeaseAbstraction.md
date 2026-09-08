---
order: 1
title: 'Lease Abstraction AI Platform'
context: 'My work at Al Rafay Consulting'
summary: 'I turned complex commercial leases into structured information for acquisition and asset-management teams.'
tech:
  - Python
  - Azure Mistral OCR
  - OpenAI
  - Blob Storage
  - Cosmos DB
  - PDFPlumber
showInProjects: true
---

I built this platform to reduce manual lease review for life sciences REITs. I combined PDFPlumber, Azure Mistral OCR and dynamic heading extraction to handle varied biotech and pharmaceutical lease formats, then used OpenAI and Azure Mistral to map the content into organized fields and metadata.

I also built the processing around the documents: tenant isolation in Azure Blob Storage and Cosmos DB, validation and graceful handling of non-critical failures. I added streaming uploads, progress reporting and stage-level timing so the team could follow a document through processing.
