<?php

namespace App\Models;

use Phalcon\Validation;
use Phalcon\Validation\Validator\Digit as DigitValidator;

class User extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $id;

    public $password;

    /**
     *
     * @var string
     */
    public $biletion_id;

    /**
     *
     * @var string
     */
    public $adress;

    /**
     *
     * @var string
     */
    public $birth_date;

    /**
     *
     * @var string
     */
    public $email;

    /**
     *
     * @var string
     */
    public $name;

    /**
     *
     * @var integer
     */
    public $phone_id;

    /**
     *
     * @var integer
     */
    public $phone_number;

    /**
     *
     * @var integer
     */
    public $is_blacklist;

    /**
     * Validations and business logic
     *
     * @return boolean
     */
    public function validation()
    {
        $validator = new Validation();

        $validator->add(
            'phoneNumber',
            new DigitValidator(
                [
                    'model'   => $this,
                    'message' => 'Please enter a correct phone number',
                ]
            )
        );

        return $this->validate($validator);
    }

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->setSchema("mozyr_express");
        $this->setSource("user");
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return User[]|User|\Phalcon\Mvc\Model\ResultSetInterface
     */
    public static function find($parameters = null): \Phalcon\Mvc\Model\ResultsetInterface
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return User|\Phalcon\Mvc\Model\ResultInterface
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

    public function columnMap () {
        return [
            'id'            => 'id',
            'phone_number'  => 'phoneNumber',
            'password'      => 'password',
            'name'          => 'name',
            'adress'        => 'adress',
            'birth_date'    => 'birthDate',
            'email'         => 'email',
            'biletion_id'   => 'biletionId',
            'phone_id'      => 'phoneId',
            'is_blacklist'  => 'isBlacklist'

        ];
    }

}
