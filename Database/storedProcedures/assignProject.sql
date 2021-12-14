
CREATE OR ALTER PROCEDURE [dbo].[assignproject]
(
    @projectid INT,
    @email VARCHAR(255)
)
AS
BEGIN
    SET NOCOUNT ON;
 INSERT INTO [dbo].[projectAssignment]
            VALUES  @projectid, @email;
END;
GO