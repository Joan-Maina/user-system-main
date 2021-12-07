CREATE OR ALTER PROCEDURE [dbo].[deleteuser]
(
    @email varchar(255)
)
AS
BEGIN
    SET NOCOUNT ON;
    DECLARE @deleted BIT;

    SELECT @deleted = isDeleted FROM [dbo].[userDetails] WHERE email = @email;

    IF @deleted = 0
        BEGIN
            UPDATE [dbo].[userDetails]
            SET isDeleted = 1
            WHERE
                email = @email;
        END
END;
GO