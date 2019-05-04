---
title: 20190225103141 Financial Data Warehouse (FDW) History & Overview
date: 2019-02-25 10:31
tags: #work, #fdw
---
## Financial Data Warehouse (FDW) History and Overview

* Focus on the contents
* Oracle Cognos world, identified key file sources, built ftp
    * Old reporting processes from mainframe
    * Initially a 40 year old model - not the standard by which anything should be done
    * B48 job on mainframe
    * Feeds out of premium, losses, and earnings
    * 'MIF' - transaction file, driving file for downstream
* Main Core Reporting Fact Tables
    * Divisional Premiums
        * Premium Category (premium transaction)
    * Divisional Losses
    * Divisional Earnings - generated over premiums, every premium transaction (mostly) corresponds to 13 earning transactions
* Shoehorned EDW into same legacy feed/ mif extract, losing detail coming out of EDW
    * Made just for financial reporting, don't care about risk details
    * In orange, purely populated from EDW feed, for additional information PDC and others wanted
    * Limit long instead of deep, defined for the user
    * Deductible deep
* RDM - essentially EDW, pushing to not use Orange tables, used EDW instead
* Every premium has some EDW id's on them, transaction is at it's most granular level, so can pull data at that level for pol_term, risk, coverage, and rating
* CORE Fact Tables 
    * Associations - entered at producer or profit center level, more aggregated, a whole associations feed , allocations process, through associations, at producer rather than policy or claim level
    * Divisional - through PRO or UD, business we're writing on our books
        * AYMR, AYPR
    * Custom - American Custom - their own reporting pieces, didn't want to go against core file, rather than indexing or partioning on business unit, split out
        * Duplicated data
        * Risk Solutions did similar thing
    * Cost - feed out of general ledger system / Peoplesoft
    * FA Losses - mix of associations and divisional
        * P & L
        * NAYUMR
        * Cost
    * Detail Premiums and earnings - mix of associations and divisional
* Stat Area/ Format
    * Collection of line of business specific attributes for stat reporting
    * Took stat format blob, broke out
* Lookup tables (LK_) - reference data
    * Get rid of and move to MDM
    * Cross reference data (xref)
    * Often pro only (missing half of the world)
* Aggregation tables (A_)
* Date and Control Tables 
    * D_EFFECTIVE_DATE - monthly control table
    * DATE_TABLE 
    * I_REPORT_DATE
* Daily tables
    * Created daily (everything else created monthly - 4 weeks aggregated into monthly file)
    * Daily feeds out pro, edw, i360, ecf
    * Some Daily tables created outside FDW, for instance web service for renewals
* Experience tables
    * _EP = earnings
    * For each major line of business
    * Aggregation for stat reporting
    * Old and new world
    * Fit in to Core dimensions
* Nobody knows to ask for things like new experience tables
* Reports
    * Accident Year Management Report (AYMR) - Main Divisional report, generates different aggregation levels
    * Profit and Loss (P & L)
    * New Accident Year Underwriting M Report
    * Annual Statement Report
    * Accident Year Planning Report
    * Misc Reporting tables
* Data Marts
    * Trucking Data Mart
        *I360 data for reporting purposes
    * PRO Data Mart
        * Originally just for PIM
        * All business units, all lines of business
        * at a coverage unit level, comes from PRO
* Used to be everything went into FDW because that's all there was
* Some of the dimensions (D_POLICY_TERM) are PRO only, but not clearly defined as such
* Referential Integrity (RI) - sometimes defined in database, some not (standalone)
    * Some not defined in oracle, test cases could be good
* Product Value table - Product value id (2 digit and parent, aggregating to first 2), product value 1-8 (unique by all 8), duel id's (confusing)
* Payment transaction ID - valid for all transaction types
* Inferred name joins - examples that won't work, + RI
    * Inferred sequential id's for many

    

    
    



