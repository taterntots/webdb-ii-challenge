Cars Table Schema

-   VIN: Primary Key, integer, auto-increment automatically.
-   make: string, not unique, max size of 255, indexed, required // An index is a way to make searches on this column faster.
-   model: string, indexed, required
-   mileage: integer (stored in miles)
-   transmission: string
-   status: string