<?php 

use Phalcon\Db\Column;
use Phalcon\Db\Index;
use Phalcon\Db\Reference;
use Phalcon\Migrations\Mvc\Model\Migration;

/**
 * Class UserMigration_100
 */
class UserMigration_100 extends Migration
{
    /**
     * Define the table structure
     *
     * @return void
     */
    public function morph()
    {
        $this->morphTable('user', [
                'columns' => [
                    new Column(
                        'id',
                        [
                            'type' => Column::TYPE_INTEGER,
                            'notNull' => true,
                            'autoIncrement' => true,
                            'size' => 8,
                            'first' => true
                        ]
                    ),
                    new Column(
                        'password',
                        [
                            'type' => Column::TYPE_CHAR,
                            'notNull' => true,
                            'size' => 60,
                            'after' => 'id'
                        ]
                    ),
                    new Column(
                        'biletion_id',
                        [
                            'type' => Column::TYPE_CHAR,
                            'notNull' => false,
                            'size' => 40,
                            'after' => 'password'
                        ]
                    ),
                    new Column(
                        'adress',
                        [
                            'type' => Column::TYPE_CHAR,
                            'notNull' => false,
                            'size' => 8,
                            'after' => 'biletion_id'
                        ]
                    ),
                    new Column(
                        'birth_date',
                        [
                            'type' => Column::TYPE_CHAR,
                            'notNull' => false,
                            'size' => 10,
                            'after' => 'adress'
                        ]
                    ),
                    new Column(
                        'email',
                        [
                            'type' => Column::TYPE_VARCHAR,
                            'notNull' => false,
                            'size' => 128,
                            'after' => 'birth_date'
                        ]
                    ),
                    new Column(
                        'name',
                        [
                            'type' => Column::TYPE_VARCHAR,
                            'notNull' => false,
                            'size' => 128,
                            'after' => 'email'
                        ]
                    ),
                    new Column(
                        'phone_id',
                        [
                            'type' => Column::TYPE_CHAR,
                            'notNull' => false,
                            'size' => 40,
                            'after' => 'name'
                        ]
                    ),
                    new Column(
                        'phone_number',
                        [
                            'type' => Column::TYPE_BIGINTEGER,
                            'notNull' => true,
                            'size' => 16,
                            'after' => 'phone_id'
                        ]
                    ),
                    new Column(
                        'is_blacklist',
                        [
                            'type' => Column::TYPE_INTEGER,
                            'default' => "0",
                            'notNull' => true,
                            'size' => 2,
                            'after' => 'phone_number'
                        ]
                    )
                ],
                'indexes' => [
                    new Index('PRIMARY', ['id'], 'PRIMARY')
                ],
                'options' => [
                    'TABLE_TYPE' => 'BASE TABLE',
                    'AUTO_INCREMENT' => '16',
                    'ENGINE' => 'InnoDB',
                    'TABLE_COLLATION' => 'utf8mb4_unicode_ci'
                ],
            ]
        );
    }

    /**
     * Run the migrations
     *
     * @return void
     */
    public function up()
    {

    }

    /**
     * Reverse the migrations
     *
     * @return void
     */
    public function down()
    {

    }

}
