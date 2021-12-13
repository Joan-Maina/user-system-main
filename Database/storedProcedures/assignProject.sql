
CREATE OR ALTER PROCEDURE [dbo].[assignproject]
(
    @projectid INT,
    @email VARCHAR(255)
)
AS
BEGIN
    SET NOCOUNT ON;
 UPDATE [dbo].[projectAssignment]
            SET projectLead = @email
            WHERE
                projectId = @projectid;
END;
GO